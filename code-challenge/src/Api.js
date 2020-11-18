import axios from "axios";

export default axios.create({
  baseURL: "https://code-challenge.spectrumtoolbox.com/api",
  responseType: "json",
  headers: {Authorization: 'Api-Key q3MNxtfep8Gt'}
});