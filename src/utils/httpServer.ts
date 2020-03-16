function getBaseUrl() {
  // dev
  let HttpServer: string = '';
  if (process.env.API_URl === 'dev') {
    HttpServer = 'http://localhost:8000';
  } else if (process.env.API_URl === 'mock') {
    HttpServer = 'http://localhost:8000';
  } else if (process.env.API_URl === 'pre') {
    HttpServer = 'http://localhost:8003';
  } else if (process.env.API_URl === 'online') {
    HttpServer = 'online';
  }
  return HttpServer;
}

export default getBaseUrl;
