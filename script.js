const { useState } = React;

function App() {
    const [prompt, setPrompt] = useState('');
    const [generatedText, setGeneratedText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        setGeneratedText(''); // Clear previous generation

        // Simulate an API call to a text generation AI (like Gemini)
        // In a real application, you would make an actual API call here.
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

        const mockResponses = {
            "write a short blog post about AI in marketing":
                "## The Future of Marketing: AI is Here!\n\nArtificial intelligence is rapidly transforming the marketing landscape, offering unprecedented opportunities for personalization, efficiency, and scale. From predictive analytics that anticipate customer needs to AI-powered content generation that creates compelling narratives, AI is no longer a futuristic concept—it's a present-day necessity for brands looking to stay competitive. Embrace AI, and let your brand's growth be truly intelligent.",
            "create a catchy social media caption for a new tech product":
                "🚀 Level up your game! Introducing the X-Tech Nova, where innovation meets intuition. Experience the future today! #TechInnovation #FutureIsNow #XTechNova",
            "draft an email subject line for a webinar on automation":
                "Unlock Efficiency: Join Our Automation Webinar!",
            "brainstorm ideas for a new chatbot":
                "1. 24/7 Customer Support: Answer FAQs, guide users to resources.\n2. Lead Qualification: Ask questions to identify hot leads for sales.\n3. Personalized Product Recommendations: Based on user preferences/past purchases.\n4. Appointment Booking: Seamless scheduling for services.\n5. Interactive FAQs: More engaging than static pages, with conversational flows."
        };

        const response = mockResponses[prompt.toLowerCase()] || "AI generated response: Your request is interesting! Mondo AI Media Labs can help you with a wide range of content, automation, and social media needs using AI and human expertise.";

        setGeneratedText(response);
        setLoading(false);
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Mondo AI Content Generator</h1>
                <p>Generate marketing content with the power of AI (simulated).</p>
            </header>
            <main className="app-main">
                <div className="input-section">
                    <textarea
                        className="prompt-input"
                        placeholder="Enter your prompt here (e.g., 'write a short blog post about AI in marketing', 'create a catchy social media caption for a new tech product', 'draft an email subject line for a webinar on automation', 'brainstorm ideas for a new chatbot')"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows="6"
                    ></textarea>
                    <button
                        className="generate-button"
                        onClick={handleGenerate}
                        disabled={loading || !prompt.trim()}
                    >
                        {loading ? 'Generating...' : 'Generate Content'}
                    </button>
                </div>
                {generatedText && (
                    <div className="output-section">
                        <h2>Generated Content:</h2>
                        <pre className="generated-text">{generatedText}</pre>
                    </div>
                )}
            </main>
            <footer className="app-footer">
                <p>&copy; 2025 Mondo AI Media Labs. Powered by AI creativity.</p>
            </footer>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
