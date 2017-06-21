function jamesFunc(a, b)
{
return a*b;
};

function getWeather(postcode)
{
  var vcap_services = JSON.parse(process.env.VCAP_SERVICES);
  var url = vcap_services.weatherinsights[0].credentials.url
return url;
};
