import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, description } = req.body;

    // Get environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailRecipient = process.env.EMAIL_RECIPIENT;

    // Validate environment variables
    if (!emailUser || !emailPass || !emailRecipient) {
      return res.status(500).json({ 
        success: false, 
        message: 'Email configuration missing. Please check server environment variables.' 
      });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    // Email content
    const mailOptions = {
      from: emailUser,
      to: emailRecipient,
      subject: '🎉 New ScanAR App Waitlist Registration',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
            }
            .container {
              border: 1px solid #e1e1e1;
              border-radius: 5px;
              padding: 20px;
              margin: 20px 0;
              background-color: #f9f9f9;
            }
            .header {
              background-color: #4f46e5;
              color: white;
              padding: 15px;
              text-align: center;
              border-radius: 5px 5px 0 0;
              margin: -20px -20px 20px;
            }
            .info-row {
              margin-bottom: 15px;
              padding: 10px;
              background-color: white;
              border-radius: 4px;
              box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            }
            .label {
              font-weight: bold;
              color: #4f46e5;
              margin-bottom: 5px;
            }
            .value {
              padding-left: 10px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              font-size: 12px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📱 New App Waitlist Registration</h2>
            </div>
            
            <p>Someone has joined the waitlist for the ScanAR application. Here are their details:</p>
            
            <div class="info-row">
              <div class="label">Name:</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="info-row">
              <div class="label">Email:</div>
              <div class="value">${email}</div>
            </div>
            
            <div class="info-row">
              <div class="label">Description / Use Case:</div>
              <div class="value">${description || 'No description provided'}</div>
            </div>
            
            <div class="footer">
              <p>This is an automated message from your ScanAR website.</p>
              <p>© ${new Date().getFullYear()} ScanAR. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
  }
} 