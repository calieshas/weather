import {EventEmitter, Injectable, Input, Output} from '@angular/core';
import {MOCKDOCUMENTS} from './MOCKDOCUMENTS';
import {Document} from './document.model';

@Injectable()
export class DocumentService {
  @Output() documentSelectedEvent = new EventEmitter<Document>();
  @Input() documents: Document[] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document {
    for (let document of this.documents) {
      if (document.id  === id) {
        return document;
      }
    }
    return null;
  }
}
