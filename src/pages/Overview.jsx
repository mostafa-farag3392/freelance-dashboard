import React from 'react';
import { FolderOpen, DollarSign, Clock, CheckCircle } from 'lucide-react';
import StatsCard from '../components/UI/StatsCard';
import MonthlyEarningsChart from '../components/Charts/MonthlyEarningsChart';
import TaskDistributionChart from '../components/Charts/TaskDistributionChart';
import { mockData } from '../data/mockData';

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Projects"
          value={mockData.overview.totalProjects}
          icon={FolderOpen}
          trend="+12% from last month"
          color="blue"
        />
        <StatsCard
          title="Total Earnings"
          value={`$${mockData.overview.totalEarnings.toLocaleString()}`}
          icon={DollarSign}
          trend="+8% from last month"
          color="green"
        />
        <StatsCard
          title="Tasks Due"
          value={mockData.overview.tasksDue}
          icon={Clock}
          color="yellow"
        />
        <StatsCard
          title="Completed Tasks"
          value={mockData.overview.completedTasks}
          icon={CheckCircle}
          trend="+15% from last month"
          color="red"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlyEarningsChart />
        <TaskDistributionChart />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {mockData.recentActivities.slice(0, 5).map((activity) => (
              <div key={activity.id} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;