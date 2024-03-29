import {useRouterError} from 'react-router-error';
export default function ErrorPages() {
    const { error } = useRouterError();
    return <div>{error ? error.message : '404 Not Found'}</div>;
}
return (
    <div>
        {error ? error.message : '404 Not Found'}
    </div>
)