
import { useState } from "react";
import { toast } from "sonner";

const EmailSubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast("Please enter your Zapier webhook URL first");
      return;
    }

    if (!email) {
      toast("Please enter your email");
      return;
    }

    setIsLoading(true);
    console.log("Triggering Zapier webhook:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
          source: window.location.origin,
        }),
      });

      toast("Thanks for subscribing! You'll hear from us soon.");
      setEmail("");
    } catch (error) {
      console.error("Error triggering webhook:", error);
      toast("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="url"
          placeholder="Paste your Zapier webhook URL"
          value={webhookUrl}
          onChange={(e) => setWebhookUrl(e.target.value)}
          className="flex-1 px-6 py-4 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/90"
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-6 py-4 rounded-full font-inter focus:outline-none focus:ring-2 focus:ring-white/20"
          disabled={isLoading}
        />
        <button 
          type="submit"
          disabled={isLoading}
          className="bg-white text-terra px-8 py-4 rounded-full font-cabinet font-medium hover:bg-stone transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Subscribing..." : "Get Started"}
        </button>
      </form>
    </div>
  );
};

export default EmailSubscribeForm;
