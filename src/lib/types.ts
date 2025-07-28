export type Friend = {
    id: string;
    name: string;
}

export type TabItem = {
    id: string;
    description: string;
    amount: number;
    date: Date;
    paidBy: 'me' | string; // 'me' or friend id
}

export type Tab = {
    friendId: string;
    items: TabItem[];
    settled: boolean;
}