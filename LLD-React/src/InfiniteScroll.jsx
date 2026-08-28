import React, { useState, useEffect, useRef } from 'react'
import './CSS/infiniteScroll.css'
const InfiniteScroll = () => {
    const [items, setItems] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef(null);
    async function fetchItems() {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=10`);
        const data = await response.json();
        console.log(data);
        setItems(prev => [...prev, ...data]);
        setLoading(false);
    }
    useEffect(() => {
        fetchItems();
    }, [pageNumber]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPageNumber(prev => prev + 1);
            }
        });
        observer.observe(bottomRef.current);
    }, []);


    // Without Intersection observer
    //     useEffect(() => {
    //     const handleScroll = () => {
    //         const nearBottom =
    //             window.innerHeight + window.scrollY >=
    //             document.documentElement.scrollHeight - 200;

    //         if (nearBottom && !loading) {
    //             setPageNumber(prev => prev + 1);
    //         }
    //     };

    //     const throttledScroll = throttle(handleScroll, 300);

    //     window.addEventListener("scroll", throttledScroll);

    //     return () => {
    //         window.removeEventListener("scroll", throttledScroll);
    //     };
    // }, [loading]);

    return (
        <div>
            <h1>InfiniteScroll</h1>
            {
                items.map((item, index) => {
                    return (<div key={index} className="list-item">
                        {item.title}
                    </div>
                    )
                })
            }
            <div ref={bottomRef} style={{ height: '20px' }}></div>

            {loading && <p>Loading...</p>}
        </div>
    )
}

export default InfiniteScroll
