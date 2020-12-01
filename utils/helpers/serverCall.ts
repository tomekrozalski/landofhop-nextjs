export enum Endpoints {
  beverageBasics = 'beverage/basics',
  beverageDetails = 'beverage/details',
  beverageTotal = 'beverage/total',
  login = 'auth',
}

type Props = {
  formData?: boolean;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  pathParams?: (string | number)[];
  token?: string;
  body?: string | FormData;
};

const serverCall = (endpoint: Endpoints, props?: Props) => {
  const { formData = false, method = 'GET', pathParams, token, ...rest } =
    props || {};

  const baseUrl = `${process.env.NEXT_PUBLIC_API_SERVER}/${endpoint}`;
  const completeUrl = pathParams?.length
    ? `${baseUrl}/${pathParams.join('/')}`
    : baseUrl;

  return fetch(completeUrl, {
    method,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      ...(!formData && { 'Content-Type': 'application/json' }),
    },
    ...rest,
  }).then(response => response.json());
};

export default serverCall;
