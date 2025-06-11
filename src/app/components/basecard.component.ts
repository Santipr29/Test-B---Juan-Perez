// src/app/components/basecard.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'storybook-base-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basecard.component.html',
  styleUrls: ['./basecard.component.scss'],
})
export class BasecardComponent {
  // Header
  @Input() headerTitle = 'Crear una medición';
  @Input() headerSubtitle = 'Permita de nuevas mediciones de participación';
  @Input() headerContent =
    'Es el proceso de evaluar cuán involucradas están las personas en una actividad, usando indicadores como asistencia, interacciones o aportes. Se recogen datos, se analizan y se obtiene un resultado que ayuda a mejorar el compromiso y la estrategia.';

  // Nombre
  @Input() nameLabel = 'Nombre de la medición *';
  @Input() namePlaceholder = 'Inserte el nombre';

  // Descripción
  @Input() descriptionLabel = 'Descripción de la medición';
  @Input() descriptionPlaceholder = 'Inserte comentarios u observaciones';

  // Estado (dropdown)
  @Input() stateLabel = 'Estado *';
  @Input() stateOptions: string[] = ['Activo', 'Inactivo'];
  @Input() selectedState = 'Activo';

  // Configuración especial
  @Input() sectionLabel = 'Configuración especial';
  @Input() showCheckbox = true;
  @Input() checkboxLabel = 'Implementación obligatoria';

  // Botones
  @Input() primaryButtonText = 'Crear medición';
  @Input() linkButtonText = 'Cancelar creación';
}
