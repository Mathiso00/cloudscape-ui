import type { Meta, StoryObj } from '@storybook/react'
import { Quest } from '@/components/components'

const meta = {
  title: 'Components/Quest',
  component: Quest,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Quest>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: _ => (
    <div className="grid grid-cols-3 gap-6 gap-y-8">
      <Quest
        name="Docker"
        icon="i-mdi-docker"
        percentage={100}
        description="With Docker, you will be able to containerize your applications and run them in any environment."
        tags={['Containers', 'Images']}
      />
      <Quest
        name="Kubernetes"
        icon="i-mdi-kubernetes"
        percentage={50}
        description="Learn to deploy, scale, and manage containerized applications using Kubernetes."
        tags={['Orchestration', 'Clusters', 'Images', 'Containers']}
      />
      <Quest
        name="Terraform"
        percentage={78}
        tags={['IaC', 'Automation']}
        icon="i-mdi-terraform"
        description="Automate your infrastructure with Terraform and scale your applications with ease."
      />
      <Quest
        name="Ansible"
        icon="i-mdi-ansible"
        tags={['Automation', 'Configuration', 'Management', 'Infrastructure', 'DevOps']}
        percentage={100}
        description="With Ansible, you can automate your infrastructure and configuration management."
      />
      <Quest
        name="Prometheus"
        tags={['Monitoring', 'Alerting']}
        percentage={18}
        icon="i-simple-icons:prometheus"
        description="Monitor and alert on the performance of your applications with Prometheus."
      />
      <Quest
        name="Grafana"
        tags={['Dashboards', 'Visualizations']}
        icon="i-simple-icons:grafana"
        description="Visualize your application's metrics and logs using Grafana's powerful dashboards."
      />
    </div>
  ),
}
