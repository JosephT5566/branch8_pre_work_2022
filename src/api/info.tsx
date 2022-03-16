import { useQuery } from 'react-query';

import { fetcher } from 'utils/fetcher';
import { Store, Event } from 'types/info';
import { API_ENDPOINT } from 'config';

interface FakeApi<T> {
	code: number;
	data: Array<T>;
	status: string;
	total: number;
}

export function useGetSurroundingStore(): { stores: Store[] | undefined; error: Error | null } {
	const { data, error } = useQuery<FakeApi<Store>, Error>({
		queryKey: [API_ENDPOINT],
		queryFn: () => fetcher(`${API_ENDPOINT}`),
		refetchOnWindowFocus: false,
	});
	
	return {
		stores: data?.data,
		error,
	};
}

export function useGetEvent(): { events: Event[] | undefined; error: Error | null } {
	const { data, error } = useQuery<FakeApi<Event>, Error>({
		queryKey: [API_ENDPOINT],
		queryFn: () => fetcher(`${API_ENDPOINT}`),
		refetchOnWindowFocus: false,
		onSuccess:(data) => {console.log(data.data)}
	});

	return {
		events: data?.data,
		error,
	};
}
