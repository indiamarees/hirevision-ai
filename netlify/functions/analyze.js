exports.handler = async (event) => {
  const { candidateName } = JSON.parse(event.body || "{}");

  const mockResult = {
    fitScore: Math.floor(Math.random() * 40) + 60,
    communication: Math.floor(Math.random() * 30) + 70,
    emotion: Math.floor(Math.random() * 30) + 70,
  };

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `AI analysis completed for ${candidateName}`,
      result: mockResult,
    }),
  };
};