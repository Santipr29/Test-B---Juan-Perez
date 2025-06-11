// src/stories/basecard.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { BasecardComponent } from '../app/components/basecard.component';

const meta: Meta<BasecardComponent> = {
  title: 'Components/Cards/MeasurementCard',
  component: BasecardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    headerTitle: { control: 'text' },
    headerSubtitle: { control: 'text' },
    headerContent: { control: 'text' },
    nameLabel: { control: 'text' },
    namePlaceholder: { control: 'text' },
    descriptionLabel: { control: 'text' },
    descriptionPlaceholder: { control: 'text' },
    stateLabel: { control: 'text' },
    stateOptions: { control: 'object' },
    selectedState: { control: 'text' },
    sectionLabel: { control: 'text' },
    showCheckbox: { control: 'boolean' },
    checkboxLabel: { control: 'text' },
    primaryButtonText: { control: 'text' },
    linkButtonText: { control: 'text' },
  },
  args: {
    headerTitle: 'Crear una medición',
    headerSubtitle: 'Permita de nuevas mediciones de participación',
    headerContent:
      'Es el proceso de evaluar cuán involucradas están las personas en una actividad, usando indicadores como asistencia, interacciones o aportes. Se recogen datos, se analizan y se obtiene un resultado que ayuda a mejorar el compromiso y la estrategia.',
    nameLabel: 'Nombre de la medición *',
    namePlaceholder: 'Inserte el nombre',
    descriptionLabel: 'Descripción de la medición',
    descriptionPlaceholder: 'Inserte comentarios u observaciones',
    stateLabel: 'Estado *',
    stateOptions: ['Activo', 'Inactivo'],
    selectedState: 'Activo',
    sectionLabel: 'Configuración especial',
    showCheckbox: true,
    checkboxLabel: 'Implementación obligatoria',
    primaryButtonText: 'Crear medición',
    linkButtonText: 'Cancelar creación',
  },
};

export default meta;
type Story = StoryObj<BasecardComponent>;

export const Default: Story = {};
