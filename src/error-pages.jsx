import { useRouterError } from 'react-router-error';
export default function ErrorPages() {
    const { error } = useRouterError();
    console.log(error);
    return (
        <div>
            {error ? error.message : '404 Not Found'}
        </div>
    );
}
