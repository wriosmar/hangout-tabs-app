import Link from 'next/link';
import Image from 'next/image';

import { useState } from 'react';

import type { Friend, Tab } from '@/lib/types';
import type { NewTabFormData } from '@/components/new-tab-item-dialog';

export default function Home() {
    // Constants
    const [friends, setFriends] = useState<Friend[]>([]);

    const [tabs, setTabs] = useState<Tab[]>([]);

    // Functions
    const handleAddFriend = (data : string) => {
        const newFriend: Friend = {
            id: crypto.randomUUID(),
            name: data
        };
        setFriends((prevFriends) => [...prevFriends, newFriend]);
        return newFriend;
    };

    const handleAddTab = (data : NewTabFormData) => {

    };

    // HTML Structure
    return (
        <main className='flex min-h-screen flex-col p-6'>
            {/* Start Here */}
        </main>
    )
}