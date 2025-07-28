import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

import type { Friend, Tab } from '@/lib/types';
import type { NewTabFormData } from '@/components/new-tab-item-dialog';

export default function Home() {
    // Constants & Functions
    const [friends, setFriends] = useState([]);

    const [tabs, setTabs] = useState([]);

    const handleAddTab = (data : NewTabFormData) => {

    };

    const handleAddFriend = (data : string) => {

    };

    // HTML Structure
    return (
        <main className='flex min-h-screen flex-col p-6'>
            {/* Start Here */}
        </main>
    )
}