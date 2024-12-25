import { useCallback } from 'react';
import { server } from '../bff';
import { selectUserSession } from '../store/selectors';
import { useSelector } from 'react-redux';

export const useServerRequest = () => {
	const session = useSelector(selectUserSession);

	return useCallback(
		(operation, ...params) => {
			const request = ['register', 'authorise', 'fetchPost', 'fetchPosts'].includes(operation)
				? params
				: [session, ...params];
			console.log('request', request);

			return server[operation](...request);
		},
		[session],
	);
};
