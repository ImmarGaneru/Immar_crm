import { Link } from '@inertiajs/react';

export default function Pagination({ links }) {
    const handleClick = () => {
        window.scrollTo({top: 0, behaviour: 'smooth'});
    };

    return (
        <div className='flex mt-8 space-x-2'>
            {links.map((link, index) => (
                link.url ? (
                    <Link
                        key={index}
                        href={link.url}
                        onClick={handleClick}
                        className={
                            link.active
                                ? 'px-4 py-2 text-sm font-semibold text-indigo-600 bg-indigo-200 border border-indigo-300 rounded-md'
                                : 'px-4 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-300 rounded-md'
                        }
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ) : (
                    <span
                        key={index}
                        className='px-4 py-2 text-sm font-semibold text-gray-400 border border-gray-300 rounded-md cursor-not-allowed'
                        dangerouslySetInnerHTML={{ __html: link.label}}
                    />
                )
            ))}
        </div>
    );
}
