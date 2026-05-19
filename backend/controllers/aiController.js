const axios = require("axios");

exports.analyzeComplaint = async (req, res) => {

  try {

    const { description, category } = req.body;

    console.log(description, category);

    const response = await axios.post(

      "https://openrouter.ai/api/v1/chat/completions",

      {
        model: "deepseek/deepseek-v4-flash:free",

        messages: [
          {
            role: "user",
            content: `
Analyze this complaint:

Complaint Description:
${description}

Category:
${category}

Provide:
1. Urgency
2. Department
3. Summary
4. Automatic Response
            `,
          },
        ],
      },

      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);

    const aiResult =
      response.data.choices[0].message.content;

    res.status(200).json({
      success: true,
      aiResult,
    });

  } catch (error) {

    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      success: false,
      message: "AI Analysis Failed",
    });

  }
};