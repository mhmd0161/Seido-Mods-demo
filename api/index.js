import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Contact / commission inquiry endpoint
app.post('/api/inquire', (req, res) => {
  const { name, email, message, watchBase } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  console.log('New inquiry received:', { name, email, watchBase, message });
  res.json({ success: true, message: 'Inquiry received. We will be in touch soon.' });
});

// Featured builds data
app.get('/api/builds', (req, res) => {
  res.json([
    { id: 1, title: 'Glacier Alpinist', base: 'Seiko SARB017', tags: ['Custom Dial', 'Sapphire Crystal'] },
    { id: 2, title: 'Midnight Turtle', base: 'Seiko SRP777', tags: ['Custom Bezel', 'Lume Hands'] },
    { id: 3, title: 'Brushed Phantom', base: 'Seiko SKX007', tags: ['Full Build', 'NH35 Movement'] },
    { id: 4, title: 'Amber Field', base: 'Seiko 5 Sports', tags: ['Custom Dial', 'Case Finishing'] },
    { id: 5, title: 'Arctic Explorer', base: 'Seiko SRPD', tags: ['Snowflake Dial', 'Chapter Ring'] },
    { id: 6, title: 'Carbon Edition', base: 'Seiko SKX013', tags: ['Full Build', 'Custom Bracelet'] },
  ]);
});

export default app;
