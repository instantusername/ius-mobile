export const API_URL: string = 'https://instant-username-search-api.herokuapp.com';
export const CHECK_URL: string = API_URL + '/check';

export type Sites = ServiceInfo[];

export interface ServiceInfo {
  endpoint: string;
  name: string;
}

export interface ServiceResult {
  service: string;
  url: string;
  available: boolean;
  message?: string | null;
}

export async function fetchAllSites(): Promise<Sites> {
  // fetch all services which are available to check
  const response = await fetch(API_URL + '/services/getAll');
  const data = await response.json();
  return data;
}

export async function check(service: ServiceInfo, username: string): Promise<ServiceResult> {
  const response = await fetch(`${CHECK_URL}/${service.endpoint}/`.replace('{username}', username));
  const data = await response.json();
  return data;
}
