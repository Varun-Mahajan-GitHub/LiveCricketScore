
export const getMatches = async () => {
  const url = 'https://api.cricapi.com/v1/currentMatches?apikey=6e8c422d-4f3b-4d66-a7b9-ce5f480c5070&offset=0';

  return await fetch(url).then((response)=>response.json())
  .catch((error)=>console.log("Error:",error))
};

export const getMatchDetails= async(id)=>{
  const url = `https://api.cricapi.com/v1/match_info?apikey=6e8c422d-4f3b-4d66-a7b9-ce5f480c5070&id=${id}`
  return await fetch(url).then((response)=>response.json())
  .catch((error)=>console.log("Error:",error))
} 