const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.post('/generate', async (req, res) => {
  const { tone, length, features, positioning } = req.body;

  const prompt = `Create a ${tone} marketing copy for a real estate developer's brochure. The copy should be ${length}. Features: ${features}. Brand Positioning: ${positioning}.`;

  try {
    const response = await axios.post(
      'https://api.edenai.run/v2/text/generation',
      { 
        providers: ["openai"],
        text: prompt
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.EDEN_AI_API_KEY}`,
        },
      }
    );

    if (response.data.openai && response.data.openai.generated_text) {
      res.json({ generatedCopy: response.data.openai.generated_text });
    } else {
      console.error('Unexpected response structure:', response.data);
      res.status(500).send('Unexpected response structure from Eden AI API.');
    }
  } catch (error) {
    console.error('Error in /generate:', error.response ? error.response.data : error.message);
    res.status(500).send(error.toString());
  }
});

app.post('/insert', async (req, res) => {
  const { tone, length, features, positioning, output } = req.body;

  try {
    const { data, error } = await supabase
      .from('marketing_copy')
      .insert([{ tone, length, features, positioning, output }]);

    if (error) throw error;
    res.send('Inserted into DB');
  } catch (error) {
    console.error('Error in /insert:', error.message);
    res.status(500).send(error.toString());
  }
});

app.post('/regenerate', async (req, res) => {
  const { highlightedText, completeText, editOption } = req.body;

  const prompt = `${editOption} this text: "${highlightedText}" in the context of: "${completeText}"`;

  try {
    const response = await axios.post(
      'https://api.edenai.run/v2/text/generation',
      { 
        providers: ["openai"],
        text: prompt
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.EDEN_AI_API_KEY}`,
        },
      }
    );

    if (response.data.openai && response.data.openai.generated_text) {
      const modifiedCopy = completeText.replace(highlightedText, response.data.openai.generated_text);
      res.json({ modifiedCopy });
    } else {
      console.error('Unexpected response structure:', response.data);
      res.status(500).send('Unexpected response structure from Eden AI API.');
    }
  } catch (error) {
    console.error('Error in /regenerate:', error.response ? error.response.data : error.message);
    res.status(500).send(error.toString());
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
