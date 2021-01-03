export enum Endpoints {
  beverageAdminDetails = 'beverage/admin/details',
  beverageBasics = 'beverage/basics',
  beverageDetails = 'beverage/details',
  beverageSearch = 'beverage/search',
  beverageStats = 'beverage/stats',
  beverageTotal = 'beverage/total',
  institution = 'institution/getAll',
  language = 'language/getAll',
  login = 'auth',
}

export enum Status {
  idle = 'idle',
  pending = 'pending',
  resolved = 'resolved',
  rejected = 'rejected',
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
  }).then(response => {
    if (response.status >= 300) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
};

export default serverCall;
