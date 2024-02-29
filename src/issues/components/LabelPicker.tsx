import useLabels from '../hooks/useLabels';

export const LabelPicker = () => {
	const { labelsQuery } = useLabels();

	console.log(labelsQuery);

	// Porque isLoading y no isFetching?
	// Porque isFetching es para saber si hay una petición en curso, isLoading es para saber si la petición ya terminó.
	if (labelsQuery.isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			{labelsQuery.data?.map((label) => {
				return (
					<span
						className='badge rounded-pill m-1 label-picker'
						style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
						key={label.id}
					>
						{label.name}
					</span>
				);
			})}
		</div>
	);
};
