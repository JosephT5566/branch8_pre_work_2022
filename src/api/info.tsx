import { useQuery } from 'react-query';

import { fetcher } from 'utils/fetcher';
import { Store, Event, News, Date } from 'types/info';
import { API_ENDPOINT } from 'config';

interface FakeApiData {
	image: string;
	title: string;
	description: string;
	date: Date;
	phone: string;
	address: string;
	tag1: string;
	tag2: string;
	tag3: string;
}

interface FakeApi<T> {
	code: number;
	data: Array<T>;
	status: string;
	total: number;
}

export function useGetSurroundingStore(): { stores: Store[] | undefined; error: Error | null } {
	const { data, error } = useQuery<FakeApi<FakeApiData>, Error>({
		queryKey: [API_ENDPOINT],
		queryFn: () => fetcher(`${API_ENDPOINT}`),
		refetchOnWindowFocus: false,
	});

	return {
		stores: data?.data.map((d) => ({ ...d, tags: [d.tag1, d.tag2, d.tag3] })),
		error,
	};
}

export function useGetEvents(): { events: Event[] | undefined; error: Error | null } {
	const { data, error } = useQuery<FakeApi<FakeApiData>, Error>({
		queryKey: [API_ENDPOINT],
		queryFn: () => fetcher(`${API_ENDPOINT}`),
		refetchOnWindowFocus: false,
	});

	return {
		events: data?.data.map((d) => ({ ...d, tags: [d.tag1, d.tag2, d.tag3] })),
		error,
	};
}

export function useGetNews(): { news: News[] | undefined; error: Error | null } {
	const { data, error } = useQuery<FakeApi<FakeApiData>, Error>({
		queryKey: [API_ENDPOINT],
		queryFn: () => fetcher(`${API_ENDPOINT}`),
		refetchOnWindowFocus: false,
		onSuccess: (data) => {
			console.log(data.data);
		},
	});

	return {
		news: data?.data.map((d) => ({
			...d,
			name: 'Lorem',
			avatar: 'https://fakeimg.pl/100x100/282828/EAE0D0/?text=avatar',
		})),
		error,
	};
}
