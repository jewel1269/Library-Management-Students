import Hero from '@/modules/hero-sections/hero';
import LibrarySection from '@/modules/books/library-section/library-section';
import React from 'react';
import LibraryPage from '@/modules/books/book-categories/book-categories';

const Root = () => {
    return (
        <div>
            <Hero/>
            <LibrarySection/>
            <LibraryPage/>
        </div>
    );
};

export default Root;