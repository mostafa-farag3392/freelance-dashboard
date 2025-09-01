export const mockData = {
  overview: {
    totalProjects: 12,
    totalEarnings: 28500,
    tasksDue: 5,
    completedTasks: 47
  },
  monthlyEarnings: [
    { month: 'Jan', earnings: 3200 },
    { month: 'Feb', earnings: 2800 },
    { month: 'Mar', earnings: 4100 },
    { month: 'Apr', earnings: 3600 },
    { month: 'May', earnings: 4800 },
    { month: 'Jun', earnings: 5200 }
  ],
  taskTypes: [
    { name: 'Development', value: 45, color: '#3B82F6' },
    { name: 'Design', value: 25, color: '#10B981' },
    { name: 'Consulting', value: 20, color: '#F59E0B' },
    { name: 'Testing', value: 10, color: '#EF4444' }
  ],
  projects: [
    { id: 1, name: 'E-commerce Website', client: 'TechCorp Inc.', status: 'In Progress', deadline: '2025-09-15', progress: 75 },
    { id: 2, name: 'Mobile App UI/UX', client: 'StartupXYZ', status: 'Completed', deadline: '2025-08-20', progress: 100 },
    { id: 3, name: 'Brand Identity Design', client: 'Creative Agency', status: 'In Progress', deadline: '2025-09-30', progress: 45 },
    { id: 4, name: 'Database Migration', client: 'DataFlow Ltd.', status: 'On Hold', deadline: '2025-10-05', progress: 20 },
    { id: 5, name: 'API Development', client: 'CloudTech', status: 'In Progress', deadline: '2025-09-10', progress: 60 }
  ],
  recentActivities: [
    { id: 1, action: 'Completed task: User Authentication', time: '2 hours ago', type: 'completion' },
    { id: 2, action: 'New project assigned: Mobile App Redesign', time: '1 day ago', type: 'assignment' },
    { id: 3, action: 'Payment received: $2,500', time: '2 days ago', type: 'payment' },
    { id: 4, action: 'Meeting scheduled with TechCorp Inc.', time: '3 days ago', type: 'meeting' },
    { id: 5, action: 'Project deadline updated', time: '4 days ago', type: 'update' }
  ],
  notifications: [
    { id: 1, message: 'New project assigned: Mobile App Redesign', time: '1 day ago', unread: true },
    { id: 2, message: 'Payment received: $2,500', time: '2 days ago', unread: true },
    { id: 3, message: 'Meeting reminder: TechCorp Inc. at 3 PM', time: '3 days ago', unread: false }
  ]
};