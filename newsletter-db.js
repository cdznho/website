// Simple Newsletter Database System
// This is a basic implementation for storing newsletter subscriptions

const fs = require('fs');
const path = require('path');

class NewsletterDB {
    constructor() {
        this.dbPath = path.join(__dirname, 'newsletter-subscribers.json');
        this.initDB();
    }

    initDB() {
        if (!fs.existsSync(this.dbPath)) {
            fs.writeFileSync(this.dbPath, JSON.stringify([], null, 2));
        }
    }

    getAllSubscribers() {
        try {
            const data = fs.readFileSync(this.dbPath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading database:', error);
            return [];
        }
    }

    addSubscriber(email) {
        try {
            const subscribers = this.getAllSubscribers();
            
            // Check if email already exists
            const existingSubscriber = subscribers.find(sub => sub.email === email);
            if (existingSubscriber) {
                return { success: false, message: 'Email already subscribed' };
            }

            // Add new subscriber
            const newSubscriber = {
                id: Date.now().toString(),
                email: email.toLowerCase(),
                subscribedAt: new Date().toISOString(),
                status: 'active'
            };

            subscribers.push(newSubscriber);
            fs.writeFileSync(this.dbPath, JSON.stringify(subscribers, null, 2));
            
            return { success: true, message: 'Successfully subscribed', subscriber: newSubscriber };
        } catch (error) {
            console.error('Error adding subscriber:', error);
            return { success: false, message: 'Failed to subscribe' };
        }
    }

    removeSubscriber(email) {
        try {
            const subscribers = this.getAllSubscribers();
            const filteredSubscribers = subscribers.filter(sub => sub.email !== email.toLowerCase());
            
            if (filteredSubscribers.length === subscribers.length) {
                return { success: false, message: 'Email not found' };
            }

            fs.writeFileSync(this.dbPath, JSON.stringify(filteredSubscribers, null, 2));
            return { success: true, message: 'Successfully unsubscribed' };
        } catch (error) {
            console.error('Error removing subscriber:', error);
            return { success: false, message: 'Failed to unsubscribe' };
        }
    }

    getSubscriberCount() {
        return this.getAllSubscribers().length;
    }

    exportSubscribers() {
        const subscribers = this.getAllSubscribers();
        const csvHeader = 'ID,Email,Subscribed Date,Status\n';
        const csvData = subscribers.map(sub => 
            `${sub.id},${sub.email},${sub.subscribedAt},${sub.status}`
        ).join('\n');
        
        return csvHeader + csvData;
    }
}

// Express.js server setup for handling newsletter subscriptions
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const newsletterDB = new NewsletterDB();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Newsletter subscription endpoint
app.post('/subscribe', (req, res) => {
    const { email } = req.body;
    
    if (!email || !email.includes('@')) {
        return res.status(400).json({ success: false, message: 'Valid email required' });
    }

    const result = newsletterDB.addSubscriber(email);
    
    if (result.success) {
        res.json(result);
    } else {
        res.status(400).json(result);
    }
});

// Get subscriber count (for admin)
app.get('/subscribers/count', (req, res) => {
    res.json({ count: newsletterDB.getSubscriberCount() });
});

// Export subscribers (for admin)
app.get('/subscribers/export', (req, res) => {
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=newsletter-subscribers.csv');
    res.send(newsletterDB.exportSubscribers());
});

// Get all subscribers (for admin)
app.get('/subscribers', (req, res) => {
    res.json(newsletterDB.getAllSubscribers());
});

// Unsubscribe endpoint
app.post('/unsubscribe', (req, res) => {
    const { email } = req.body;
    const result = newsletterDB.removeSubscriber(email);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Newsletter server running at http://localhost:${port}`);
});

module.exports = NewsletterDB;