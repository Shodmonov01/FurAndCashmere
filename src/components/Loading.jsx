import React from 'react';

// million-ignore
function Loading() {
    return (
        <div className="flex items-center justify-center py-2">
            <div className="inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
            >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                </span>
            </div>
        </div>
    )
}

export default Loading;