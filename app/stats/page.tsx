'use client';

import React from 'react';
import "chart.js/auto";
import useStatsStore from '@/stores/statsStore';


interface GraphProps {
	data: number[];
	label: string;
	lineColor: string;
	fillColor: string;
}

const calculateStats = (data: number[]) => {
	const average = data.reduce((sum, value) => sum + value, 0) / data.length;
	const standardDeviation = Math.sqrt(
		data.reduce((sum, value) => sum + Math.pow(value - average, 2), 0) / data.length
	);
	const max = Math.max(...data);

	return { average, standardDeviation, max };
};

const Graph: React.FC<GraphProps> = ({ data, label, lineColor, fillColor }) => {
	const stats = calculateStats(data);

	return (
	
	);
};

const StatsPage: React.FC = () => {
	const { stats } = useStatsStore();
	const speeds: number[] = stats.map(item => item.speed);
	const accuracies: number[] = stats.map(item => item.accuracy);

	return (

	);
};

export default StatsPage;