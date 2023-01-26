import { Configuration, OpenAIApi } from "openai";
import React, { useState } from "react";
import TextBox from "../../components/textBox";

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

function StaffingHelper() {
    const [projectContext, setProjectContext] = useState("");
    const [suggestionSummary, setSuggestionSummary] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const removeEmptyLinesAtStart = (text) => {
        if (text.startsWith("\n")) {
          return removeEmptyLinesAtStart(text.slice(2));
        }
    
        return text;
      };
      const generate = async () => {
        setIsLoading(true);
        try {
            const prompt = `For the Client's project description: ${projectContext}, suggest a staffing plan for the project by Thoughtworks 
            who is enagaged in the project. Remember to include only those roles that Thoughtworks has.The staffing plan should include the following information: \n
            1. The number of people in the team \n
            2. The roles of the people in the team \n
            3. The skills of the people in the team \n
            
            `;

            const openai = new OpenAIApi(configuration);
            const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt,
            max_tokens: 1024,
            });
            const response = removeEmptyLinesAtStart(completion.data.choices[0].text);
            setSuggestionSummary(response);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
          {isLoading && (
            <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-10">
              <div class="w-24 h-24 border-l-2 border-white border-opacity-75 rounded-full animate-spin"></div>
            </div>
          )}
          <div className="flex justify-between items-center py-6 font-inter">
            <div className="flex items-center">
              <h2 className="font-semibold text-lg mr-6">
                Staffing Helper
              </h2>
            </div>
            <button
              type="button"
              className="rounded-full bg-flamingo-pink px-5 py-2"
              onClick={generate}
            >
              Generate
            </button>
          </div>
          <div className="flex justify-between items-center pt-1 gap-4">
            <TextBox
              text={projectContext}
              onTextChange={(text) => setProjectContext(text)}
              title="Project Context"
              readOnly={false}
            />
            <TextBox
                text={suggestionSummary}
                // onTextChange={() => { }}
                title="Suggestion Summary"
                readOnly={true}
            />
          </div>
        </div>
      );
}

export default StaffingHelper;