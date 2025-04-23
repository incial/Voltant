import nodemailer from 'nodemailer'
// Import dotenv to access environment variables
import dotenv from 'dotenv'

// Initialize dotenv
dotenv.config()

// Netlify serverless function
export const handler = async function (event) {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  }

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers
    }
  }

  // Only handle POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ success: false, message: 'Method not allowed' })
    }
  }

  try {
    // Parse the request body
    const { name, email, message } = JSON.parse(event.body)

    console.log(
      `📧 Attempting to send email with contact from: ${email} (${name})`
    )

    // Validate required fields
    if (!name || !email || !message) {
      console.log('❌ Missing required fields')
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Please provide name, email, and message'
        })
      }
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log('❌ Invalid email format')
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Please provide a valid email address'
        })
      }
    }

    // Create mail transporter with improved configuration
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      // Improved security and deliverability settings
      secure: true, // Use TLS
      port: 465, // Secure SMTP port
      tls: {
        rejectUnauthorized: true
      }
      // DKIM would normally be configured here if you have the keys
    })

    // Clean up and prepare the inputs for email
    const sanitizedName = name.trim()
    const sanitizedEmail = email.trim().toLowerCase()
    const sanitizedMessage = message.trim()

    // Get recipient email from environment variables
    const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.EMAIL_USER

    // Construct proper message ID with your domain
    const messageId = `${Date.now()}.${Math.random()
      .toString(36)
      .substring(2)}@voltant.energy`

    // Email options with improved headers and formatting
    const mailOptions = {
      // Use a proper from address format
      from: {
        name: 'Voltant Energy Website',
        address: process.env.EMAIL_USER
      },
      to: recipientEmail,
      // Set reply-to as the client's email
      replyTo: {
        name: sanitizedName,
        address: sanitizedEmail
      },
      // Unique Message-ID to avoid duplicate detection
      messageId: messageId,
      // Improved subject line
      subject: `Website Contact: ${sanitizedName} - ${new Date().toLocaleDateString()}`,
      // Important headers for deliverability
      priority: 'normal',
      headers: {
        'X-Mailer': 'Voltant Energy Contact Form',
        'X-Contact-Form': 'true',
        Precedence: 'bulk'
      },
      // Include both text and HTML versions
      text: `
New Contact Submission from Voltant Energy Website

FROM: ${sanitizedName}
EMAIL: ${sanitizedEmail}

MESSAGE:
${sanitizedMessage}

Sent: ${new Date().toLocaleString()}
Form ID: ${messageId}

This message was sent through the Voltant Energy website contact form.
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contact Form Submission</title>
          <!-- No external CSS references to improve deliverability -->
          <style>
            @media only screen and (max-width: 620px) {
              table.body {
                width: 100% !important;
              }
              table.body .container {
                width: 100% !important;
                padding: 0 !important;
              }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Cairo', Arial, sans-serif; background-color: #f5f5f5; color: #333333;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-collapse: collapse;">
            <tr>
              <td style="background-color: #00251a; padding: 20px; text-align: center;">
                <img src="https://res.cloudinary.com/drzpgff2h/image/upload/v1744971858/voltant-energy/logos/logo_white.png" alt="Voltant Energy Logo" width="180" height="auto" style="display: block; margin: 0 auto;">
              </td>
            </tr>
            <tr>
              <td style="padding: 30px 25px 10px; text-align: center;">
                <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #333333;">Contact Enquiry</h1>
                <p style="margin: 15px 0 0; font-size: 16px; color: #666666;">A new message has been received from the website contact form.</p>
                <p style="margin: 5px 0 0; font-size: 14px; color: #999999;">${new Date().toLocaleString()}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 25px;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="padding: 12px 0;">
                      <p style="margin: 0; font-size: 16px; font-weight: 600; color: #333333;">From:</p>
                      <p style="margin: 5px 0 0; font-size: 15px; color: #666666;">${sanitizedName}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0;">
                      <p style="margin: 0; font-size: 16px; font-weight: 600; color: #333333;">Email:</p>
                      <p style="margin: 5px 0 0; font-size: 15px; color: #666666;"><a href="mailto:${sanitizedEmail}" style="color: #4AB757; text-decoration: none;">${sanitizedEmail}</a></p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0 0;">
                      <p style="margin: 0; font-size: 16px; font-weight: 600; color: #333333;">Message:</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0 12px;">
                      <div style="padding: 20px; background-color: #f9f9f9; border-radius: 8px; border-left: 4px solid #4AB757;">
                        <p style="margin: 0; font-size: 15px; color: #333333; line-height: 1.6;">${sanitizedMessage.replace(
                          /\n/g,
                          '<br>'
                        )}</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color: #f5f5f5; padding: 20px 25px; border-top: 1px solid #e0e0e0;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td>
                      <p style="margin: 0; font-size: 13px; color: #777777;">This is an automated email from the Voltant Energy website contact form. ID: ${
                        messageId.split('@')[0]
                      }</p>
                    </td>
                    <td align="right">
                      <a href="https://voltant.energy" style="color: #4AB757; text-decoration: none; font-weight: 500; font-size: 13px;">voltant.energy</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    // Log successful sending with message ID for tracking
    console.log('✅ Email sent successfully!')
    console.log(`📝 Message ID: ${info.messageId}`)
    console.log(`📤 Sent to: ${recipientEmail}`)

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        messageId: info.messageId
      })
    }
  } catch (error) {
    console.error('❌ Error sending email:', error)

    // Return error response
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Failed to send email',
        error: error.message
      })
    }
  }
}
