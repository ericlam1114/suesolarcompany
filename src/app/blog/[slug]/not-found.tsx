import Link from 'next/link';

function NotFound() {
    return (
        <div className="not-found">
            <h1>Not Found</h1>
            <p>The post requested does not exist</p>
            <Link href="/">Back to Home</Link>
        </div>
    );
}

export default NotFound;
