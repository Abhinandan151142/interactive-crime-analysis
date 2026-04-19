import type { Crime, DashboardStats, MonthlyData, CrimeTypeData, DistrictData, Prediction, Alert, ModelMetrics } from '../types';
import { getApiUrl } from '../config/api.config';
const BASE_URL = "https://crime-pattern-analysis-and-prediction-szd8.onrender.com";


// API will use environment variable VITE_API_URL when backend is ready

// Mock data generator for demo purposes (replace with real API calls)
const generateMockCrimes = (count: number): Crime[] => {
  const types = ['Theft', 'Assault', 'Burglary', 'Vandalism', 'Robbery', 'Drug Offense'];
  const districts = ['Downtown', 'North', 'South', 'East', 'West', 'Central'];
  const severities: Array<'low' | 'medium' | 'high' | 'critical'> = ['low', 'medium', 'high', 'critical'];
  const statuses: Array<'active' | 'investigating' | 'solved'> = ['active', 'investigating', 'solved'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `crime-${i + 1}`,
    type: types[Math.floor(Math.random() * types.length)],
    location: `${Math.floor(Math.random() * 9999)} ${['Main St', 'Oak Ave', 'Elm Rd', 'Park Blvd'][Math.floor(Math.random() * 4)]}`,
    lat: 40.7128 + (Math.random() - 0.5) * 0.1,
    lng: -74.0060 + (Math.random() - 0.5) * 0.1,
    timestamp: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
    severity: severities[Math.floor(Math.random() * severities.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    district: districts[Math.floor(Math.random() * districts.length)],
    description: 'Crime incident reported'
  }));
};

export const api = {
 async getCrimes(): Promise<Crime[]> {
  try {
    const response = await fetch(`${BASE_URL}/api/crimes`);
    return await response.json();
  } catch (error) {
    console.error("API failed, using mock data", error);
    return generateMockCrimes(100);
  }
},
  

  async getCrimeSummary(): Promise<DashboardStats> {
    return new Promise((resolve) => {
      setTimeout(() => resolve({
        totalCrimes: 1247,
        totalCrimesChange: -8.2,
        activeCases: 423,
        activeCasesChange: 12.5,
        arrestsMade: 189,
        arrestsMadeChange: 5.7,
        highRiskAreas: 7,
        highRiskAreasChange: -14.3
      }), 300);
    });
  },

  async getMonthlyData(): Promise<MonthlyData[]> {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = months.map(month => ({
          month,
          theft: Math.floor(Math.random() * 100) + 50,
          assault: Math.floor(Math.random() * 80) + 30,
          burglary: Math.floor(Math.random() * 60) + 20,
          vandalism: Math.floor(Math.random() * 40) + 10,
          total: 0
        }));
        data.forEach(d => d.total = d.theft + d.assault + d.burglary + d.vandalism);
        resolve(data);
      }, 300);
    });
  },

  async getCrimeTypeData(): Promise<CrimeTypeData[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          { type: 'Theft', count: 425, percentage: 34.1 },
          { type: 'Assault', count: 298, percentage: 23.9 },
          { type: 'Burglary', count: 187, percentage: 15.0 },
          { type: 'Vandalism', count: 145, percentage: 11.6 },
          { type: 'Robbery', count: 112, percentage: 9.0 },
          { type: 'Drug Offense', count: 80, percentage: 6.4 }
        ];
        resolve(data);
      }, 300);
    });
  },

  async getHourlyData(): Promise<{ hour: number; count: number }[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = Array.from({ length: 24 }, (_, hour) => ({
          hour,
          count: Math.floor(Math.random() * 50) + (hour >= 18 && hour <= 23 ? 50 : 10)
        }));
        resolve(data);
      }, 300);
    });
  },

  async getDistrictData(): Promise<DistrictData[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          { district: 'Downtown', count: 342, riskLevel: 'high' as const },
          { district: 'North', count: 256, riskLevel: 'medium' as const },
          { district: 'South', count: 198, riskLevel: 'medium' as const },
          { district: 'East', count: 234, riskLevel: 'high' as const },
          { district: 'West', count: 145, riskLevel: 'low' as const },
          { district: 'Central', count: 289, riskLevel: 'high' as const }
        ];
        resolve(data);
      }, 300);
    });
  },

  async getPredictions(district: string): Promise<Prediction[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const dates = Array.from({ length: 7 }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() + i);
          return date.toISOString().split('T')[0];
        });
        
        const predictions = dates.map(date => ({
          date,
          district,
          riskLevel: (['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)]) as any,
          probability: Math.random() * 0.4 + 0.6,
          confidence: Math.random() * 0.2 + 0.8,
          predictedCrimes: [
            { type: 'Theft', count: Math.floor(Math.random() * 20) + 5 },
            { type: 'Assault', count: Math.floor(Math.random() * 15) + 3 },
            { type: 'Burglary', count: Math.floor(Math.random() * 10) + 2 }
          ]
        }));
        resolve(predictions);
      }, 800);
    });
  },

  async getAlerts(): Promise<Alert[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const alerts = [
          { id: '1', type: 'critical' as const, message: 'High crime spike detected in Downtown area', timestamp: new Date(), district: 'Downtown' },
          { id: '2', type: 'warning' as const, message: 'Increased assault reports in North district', timestamp: new Date(Date.now() - 3600000), district: 'North' },
          { id: '3', type: 'info' as const, message: 'Model retrained with latest data', timestamp: new Date(Date.now() - 7200000) }
        ];
        resolve(alerts);
      }, 300);
    });
  },

  async getModelMetrics(): Promise<ModelMetrics> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          accuracy: 0.87,
          precision: 0.84,
          recall: 0.82,
          f1Score: 0.83,
          lastTrained: new Date(Date.now() - 24 * 60 * 60 * 1000)
        });
      }, 300);
    });
  },

  async generatePrediction(params: any): Promise<Prediction[]> {
    return this.getPredictions(params.district);
  },

  async addCrime(crimeData: Partial<Crime>): Promise<Crime> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: `crime-${Date.now()}`,
          type: crimeData.type || 'Unknown',
          location: crimeData.location || 'Unknown',
          lat: crimeData.lat || 0,
          lng: crimeData.lng || 0,
          timestamp: new Date(),
          severity: crimeData.severity || 'low',
          status: 'active',
          district: crimeData.district || 'Unknown'
        });
      }, 500);
    });
  }
};
