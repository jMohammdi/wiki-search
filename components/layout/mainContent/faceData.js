export const initialData = {
  tasks: [
    { id: 1, content: 'Configure Next.js application' },
    { id: 2, content: 'Configure Next.js and tailwind ' },
    { id: 3, content: 'Create sidebar navigation menu' },
    { id: 4, content: 'Create page footer' },
    { id: 5, content: 'Create page navigation menu' },
    { id: 6, content: 'Create page layout' }
  ],
  columns: [
    {
      id: 'column-1',
      title: 'TO-DO',
      taskIds: [1, 2, 3, 4, 5, 6]
    },
    {
      id: 'column-2',
      title: 'IN-PROGRESS',
      taskIds: []
    },
    {
      id: 'column-3',
      title: 'COMPLETED',
      taskIds: []
    }
  ],
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3']
}
