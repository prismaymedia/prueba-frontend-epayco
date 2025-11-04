import { Button } from '../atoms/Button';

const UsersIcon = () => (
    <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const UserIcon = () => (
    <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

interface UserFilterProps {
    users: number[];
    selectedUserId: number | null;
    onSelectUser: (userId: number | null) => void;
    postCounts: Record<number, number>;
}

export const UserFilter = ({ users, selectedUserId, onSelectUser, postCounts }: UserFilterProps) => {
    if (users.length === 0) {
        return null;
    }

    const totalPosts = users.reduce((total, userId) => total + (postCounts[userId] ?? 0), 0);

    return (
        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <UsersIcon />
                </span>
                <div className="space-y-1">
                    <h3 className="text-base font-semibold text-slate-900">Filtrar por autor</h3>
                    <p className="text-sm text-slate-500">Selecciona un usuario para mostrar solo sus publicaciones.</p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                <Button
                    type="button"
                    size="sm"
                    variant={selectedUserId === null ? 'primary' : 'outline'}
                    onClick={() => onSelectUser(null)}
                    className="rounded-full px-4 min-w-[164px] max-w-[168px]"
                >
                    <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
                        <UsersIcon />
                    </span>
                    Todos
                    <span className="ml-2 inline-flex items-center justify-center rounded-full bg-white/70 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                        {totalPosts}
                    </span>
                </Button>

                {users.map(userId => (
                    <Button
                        key={userId}
                        type="button"
                        size="sm"
                        variant={selectedUserId === userId ? 'primary' : 'outline'}
                        onClick={() => onSelectUser(userId)}
                        className="rounded-full px-4 min-w-[164px] max-w-[168px]"
                    >
                        <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
                            <UserIcon />
                        </span>
                        Usuario {userId}
                        <span className="ml-2 inline-flex items-center justify-center rounded-full bg-white/70 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                            {postCounts[userId] ?? 0}
                        </span>
                    </Button>
                ))}
            </div>
        </div>
    );
};

