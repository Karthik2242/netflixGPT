

export const createOptions = (inputText) => ({
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNmRkNjU4ZjQtYWY0MC00OGQyLWE2NDctOWQyMjMwZWZmMGI3IiwidHlwZSI6ImFwaV90b2tlbiJ9.hnLvXO--AtrZt_GBDpGRRcf3A7kvtPQJZSFPjJgNIBg', 
    },
    body: JSON.stringify({
      response_as_dict: true,
      attributes_as_list: false,
      show_base_64: true,
      show_original_response: false,
      temperature: 0,
      max_tokens: 1000,

      tool_choice: 'auto',
      providers: ['openai'],
      text: 'Act as a Movie Recommendation system and suggest some of the top 5 movies for the query without any further information give only movie names of' + inputText + "with comma seperated for example: sholay,ravan,robo,dangal,remo"
    }),
  });
  