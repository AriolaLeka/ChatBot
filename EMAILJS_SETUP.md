# EmailJS Setup Guide

This guide will help you set up EmailJS to receive email notifications when users fill out the contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Fixing Gmail Authentication Error

If you get the error "412 Gmail_API: Request had insufficient authentication scopes":

1. **Disconnect your Gmail account** from EmailJS (click "Disconnect" in the modal)
2. **Go to your Google Account settings**: https://myaccount.google.com/permissions
3. **Find EmailJS** in the list of connected apps and **remove it**
4. **Go back to EmailJS** and try connecting Gmail again
5. **Make sure to grant ALL permissions** when Google asks for them
6. **Alternative**: Try using a different email provider like Outlook or Yahoo if Gmail continues to have issues

## Step 3: Create Email Templates

### Template 1: Contact Form Notification (to you)

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** `New Contact Form Submission from {{from_name}}`

**Content:**
```
You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Business Type: {{business_type}}
Message: {{message}}

Submitted on: {{date}}

Reply directly to this email to respond to the customer.
```

4. Save the template and note down the **Template ID**

### Template 2: Auto-Reply (to customer)

1. Create another template
2. Use this template content:

**Subject:** `Thank you for contacting AtiendeBot!`

**Content:**
```
Hi {{to_name}},

Thank you for reaching out to us! We've received your message and will get back to you within 24 hours.

Your message:
"{{message}}"

Best regards,
The AtiendeBot Team
```

3. Save the template and note down the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" in your EmailJS dashboard
2. Find your **Public Key** (also called User ID)

## Step 5: Update Configuration

1. Open `/src/utils/emailService.js`
2. Replace the placeholder values:

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your contact form template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your public key
```

3. Also update the auto-reply template ID in the `sendAutoReplyEmail` function:

```javascript
const response = await emailjs.send(
  EMAILJS_SERVICE_ID,
  'AUTO_REPLY_TEMPLATE_ID', // Replace with your auto-reply template ID
  templateParams
);
```

## Step 6: Test the Setup

1. Start your React app: `npm start`
2. Fill out the contact form
3. Check your email for the notification
4. Check the customer's email for the auto-reply

## Troubleshooting

- Make sure all IDs are correct (no extra spaces or quotes)
- Check your email provider's spam folder
- Verify your email service is properly connected in EmailJS
- Check the browser console for any error messages

## EmailJS Limits (Free Plan)

- 200 emails per month
- 2 email services
- 2 email templates
- 1,000 requests per month

For higher limits, consider upgrading to a paid plan.
