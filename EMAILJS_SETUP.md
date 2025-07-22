# EmailJS Setup Guide for Voltant Energy Contact Form

## What is EmailJS?
EmailJS allows you to send emails directly from your frontend application without needing a backend server. It's perfect for contact forms and enquiries.

## Setup Steps:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure for the contact form:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent via the Voltant Energy website contact form.
Reply-To: {{reply_to}}
```

4. Note down the **Template ID**

### 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called User ID)

### 5. Configure Environment Variables
Update the `.env` file with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

### 6. Email Template Variables
The contact form sends these variables to your EmailJS template:
- `from_name`: User's name from the form
- `from_email`: User's email from the form
- `message`: User's message from the form
- `to_name`: "Voltant Energy" (can be customized)
- `reply_to`: User's email (for easy replies)

### 7. Test the Setup
1. Save your `.env` file with the correct values
2. Restart your development server
3. Test the contact form
4. Check your email inbox for the test message

## Free Plan Limitations:
- 200 emails per month
- EmailJS branding in emails
- Basic support

## Paid Plans:
- More emails per month
- Remove EmailJS branding
- Priority support
- Advanced features

## Security Notes:
- Your EmailJS public key is safe to expose in frontend code
- Never expose your private key
- Set up domain restrictions in EmailJS dashboard for production
- Consider rate limiting to prevent spam

## Troubleshooting:
1. Check browser console for error messages
2. Verify all environment variables are set correctly
3. Ensure EmailJS service is properly configured
4. Check spam folder for test emails
5. Verify domain restrictions in EmailJS dashboard
