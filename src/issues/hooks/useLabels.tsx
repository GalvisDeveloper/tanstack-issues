import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../labels/label';
import { sleep } from '../../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
	await sleep(2);
	const { data } = await githubApi.get<Label[]>('/labels');
	return data;
};

const useLabels = () => {
	const labelsQuery = useQuery(['labels'], getLabels, {
		refetchOnWindowFocus: false,
	});

	return { labelsQuery };
};

export default useLabels;
