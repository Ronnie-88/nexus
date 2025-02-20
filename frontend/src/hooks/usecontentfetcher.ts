import useSWR from "swr";

export default function useContentFetcher<T>(
  url: string,
  fetcher: (url: string) => Promise<T | undefined>
) {
  const { data, error, isLoading } = useSWR<T | undefined>(url, fetcher);

  return {
    data,
    error,
    isLoading,
  };
}
