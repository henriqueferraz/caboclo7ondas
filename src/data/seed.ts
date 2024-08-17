import { Activity, CreditCard, DollarSign, User, Users } from "lucide-react";

export const seed = {
    menuItens: [
        { id: 1, title: "Dashboard", link: "/", icon: "dashboard" },
        { id: 2, title: "User", link: "/users", icon: "users" },
        { id: 3, title: "Orders", link: "/orders", icon: "orders" },
        { id: 4, title: "Settings", link: "/settings", icon: "settings" }
    ],
    users: [
        { id: 101, name: "Alice", email: "alice@exemplo.com" },
        { id: 102, name: "Bob", email: "bob@exemplo.com" },
        { id: 103, name: "Charlie", email: "chalie@exemplo.com" },
    ],
    orders: [
        { id: 1001, userId: 101, totalAmount: 150.0 },
        { id: 1002, userId: 102, totalAmount: 200.0 },
        { id: 1003, userId: 103, totalAmount: 100.0 },
    ],
    cardData: [
        {
            id: 1001,
            label: "Total Revenue",
            amount: "R$45,231.89",
            discription: "+20.1% from last month",
            icon: DollarSign
        },
        {
            id: 1002,
            label: "Subscriptions",
            amount: "+2350",
            discription: "+180.4% from last month",
            icon: Users
        },
        {
            id: 1003,
            label: "Sales",
            amount: "+12,234",
            discription: "+18.4% from last month",
            icon: CreditCard
        },
        {
            id: 1004,
            label: "Active Now",
            amount: "+573",
            discription: "+180 from last month",
            icon: Activity
        },
    ],
    barChartData: [
        {
            name: "Jan",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Fev",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Mar",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Abr",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Mai",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Jun",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Jul",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Ago",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Set",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Out",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Nov",
            total: Math.floor(Math.random() * 5000) + 1000
        },
        {
            name: "Dez",
            total: Math.floor(Math.random() * 5000) + 1000
        }
    ],
    usersData: [
        {
            id: 1000,
            name: "Olivia Benson",
            email: "olivia@exemplo.com",
            saleAmount: "+R$1,559.00"
        },
        {
            id: 1001,
            name: "Jack Chan",
            email: "jack@exemplo.com",
            saleAmount: "+R$1,222.00"
        },
        {
            id: 1002,
            name: "Isabella Maria",
            email: "isabella@exemplo.com",
            saleAmount: "+R$3,789.00"
        },
        {
            id: 1003,
            name: "Willian Shakespeare",
            email: "willian@exemplo.com",
            saleAmount: "+R$450.00"
        },
        {
            id: 1004,
            name: "Sofia da Silva",
            email: "sofia@exemplo.com",
            saleAmount: "+R$35,850.00"
        },
        {
            id: 1005,
            name: "Ethan Roskovisk",
            email: "ethan@exemplo.com",
            saleAmount: "+R$2,546.00"
        },
        {
            id: 1006,
            name: "Emma Watson",
            email: "emma@exemplo.com",
            saleAmount: "+R$115,450.00"
        },
        {
            id: 1007,
            name: "Moana da Silva",
            email: "moana@exemplo.com",
            saleAmount: "+R$35,850.00"
        },
    ],
    ordersData: [
        {
            order: "ORD001",
            status: "Pending",
            lastOrder: "2024-04-01",
            method: "Credit Card",
        },
        {
            order: "ORD002",
            status: "Processing",
            lastOrder: "2024-04-01",
            method: "Credit Card",
        },
        {
            order: "ORD003",
            status: "Completed",
            lastOrder: "2024-04-01",
            method: "Credit Card",
        },
        {
            order: "ORD004",
            status: "Pending",
            lastOrder: "2024-04-01",
            method: "Credit Card",
        },
    ],
    settingData: [
        {
            category: "Acconut",
            value: true,
        },
        {
            category: "Notifications",
            value: true,
        },
        {
            category: "Language",
            value: "English",
        },
        {
            category: "Theme",
            value: "Dark",
        },
    ],
    paymentData: [
        {
            id: 2000,
            name: "John Doe",
            email: "john@exemplo.com",
            lastOrder: "2024-02-01",
            method: "Credit Card"
        },
        {
            id: 2001,
            name: "Folio Ninsu",
            email: "Folio@exemplo.com",
            lastOrder: "2024-04-01",
            method: "PayPal"
        },
        {
            id: 2002,
            name: "Xueain Gulalazou",
            email: "Xueain@exemplo.com",
            lastOrder: "2024-09-01",
            method: "Stripe"
        },
        {
            id: 2003,
            name: "Wuinu Hexiu",
            email: "john@exemplo.com",
            lastOrder: "2024-03-01",
            method: "Venmo"
        },
        {
            id: 2004,
            name: "Ruetyozoa Fetoheto",
            email: "Ruetyozoa@exemplo.com",
            lastOrder: "2024-04-01",
            method: "Credit Card"
        },
        {
            id: 2005,
            name: "Madek Tala",
            email: "Madek@exemplo.com",
            lastOrder: "2024-06-01",
            method: "Cash"
        },
        {
            id: 2006,
            name: "Rafael Almeida",
            email: "Rafael@exemplo.com",
            lastOrder: "2024-07-01",
            method: "Credit Card"
        },
        {
            id: 2007,
            name: "Juliana Costa",
            email: "Juliana@exemplo.com",
            lastOrder: "2024-08-01",
            method: "Credit Card"
        },
        {
            id: 2008,
            name: "John Doe",
            email: "john@exemplo.com",
            lastOrder: "2024-02-01",
            method: "Credit Card"
        },
        {
            id: 2009,
            name: "Folio Ninsu",
            email: "Folio@exemplo.com",
            lastOrder: "2024-04-01",
            method: "PayPal"
        },
        {
            id: 2010,
            name: "Xueain Gulalazou",
            email: "Xueain@exemplo.com",
            lastOrder: "2024-09-01",
            method: "Stripe"
        },
        {
            id: 2011,
            name: "Wuinu Hexiu",
            email: "john@exemplo.com",
            lastOrder: "2024-03-01",
            method: "Venmo"
        },
        {
            id: 2012,
            name: "Ruetyozoa Fetoheto",
            email: "Ruetyozoa@exemplo.com",
            lastOrder: "2024-04-01",
            method: "Credit Card"
        },
        {
            id: 2013,
            name: "Madek Tala",
            email: "Madek@exemplo.com",
            lastOrder: "2024-06-01",
            method: "Cash"
        },
        {
            id: 2014,
            name: "Rafael Almeida",
            email: "Rafael@exemplo.com",
            lastOrder: "2024-07-01",
            method: "Credit Card"
        },
        {
            id: 2015,
            name: "Juliana Costa",
            email: "Juliana@exemplo.com",
            lastOrder: "2024-08-01",
            method: "Credit Card"
        }
    ]
}