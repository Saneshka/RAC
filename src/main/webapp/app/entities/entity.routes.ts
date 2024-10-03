import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'Authorities' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'customer',
    data: { pageTitle: 'Customers' },
    loadChildren: () => import('./customer/customer.routes'),
  },
  {
    path: 'customervehicle',
    data: { pageTitle: 'Customervehicles' },
    loadChildren: () => import('./customervehicle/customervehicle.routes'),
  },
  {
    path: 'servicecategory',
    data: { pageTitle: 'Servicecategories' },
    loadChildren: () => import('./servicecategory/servicecategory.routes'),
  },
  {
    path: 'autocarejob',
    data: { pageTitle: 'Autocarejobs' },
    loadChildren: () => import('./autocarejob/autocarejob.routes'),
  },
  {
    path: 'vehicletype',
    data: { pageTitle: 'Vehicletypes' },
    loadChildren: () => import('./vehicletype/vehicletype.routes'),
  },
  {
    path: 'autocareappointment',
    data: { pageTitle: 'Autocareappointments' },
    loadChildren: () => import('./autocareappointment/autocareappointment.routes'),
  },
  {
    path: 'autocarejobinimages',
    data: { pageTitle: 'Autocarejobinimages' },
    loadChildren: () => import('./autocarejobinimages/autocarejobinimages.routes'),
  },
  {
    path: 'autocareappointmenttype',
    data: { pageTitle: 'Autocareappointmenttypes' },
    loadChildren: () => import('./autocareappointmenttype/autocareappointmenttype.routes'),
  },
  {
    path: 'vehiclecategory',
    data: { pageTitle: 'Vehiclecategories' },
    loadChildren: () => import('./vehiclecategory/vehiclecategory.routes'),
  },
  {
    path: 'inventory',
    data: { pageTitle: 'Inventories' },
    loadChildren: () => import('./inventory/inventory.routes'),
  },
  {
    path: 'servicesubcategory',
    data: { pageTitle: 'Servicesubcategories' },
    loadChildren: () => import('./servicesubcategory/servicesubcategory.routes'),
  },
  {
    path: 'stocklocations',
    data: { pageTitle: 'Stocklocations' },
    loadChildren: () => import('./stocklocations/stocklocations.routes'),
  },
  {
    path: 'inventorybatches',
    data: { pageTitle: 'Inventorybatches' },
    loadChildren: () => import('./inventorybatches/inventorybatches.routes'),
  },
  {
    path: 'vehiclebrandname',
    data: { pageTitle: 'Vehiclebrandnames' },
    loadChildren: () => import('./vehiclebrandname/vehiclebrandname.routes'),
  },
  {
    path: 'vehiclebrandmodel',
    data: { pageTitle: 'Vehiclebrandmodels' },
    loadChildren: () => import('./vehiclebrandmodel/vehiclebrandmodel.routes'),
  },
  {
    path: 'workshopworklist',
    data: { pageTitle: 'Workshopworklists' },
    loadChildren: () => import('./workshopworklist/workshopworklist.routes'),
  },
  {
    path: 'workshopvehiclework',
    data: { pageTitle: 'Workshopvehicleworks' },
    loadChildren: () => import('./workshopvehiclework/workshopvehiclework.routes'),
  },
  {
    path: 'autojobempallocation',
    data: { pageTitle: 'Autojobempallocations' },
    loadChildren: () => import('./autojobempallocation/autojobempallocation.routes'),
  },
  {
    path: 'autocarejobcategory',
    data: { pageTitle: 'Autocarejobcategories' },
    loadChildren: () => import('./autocarejobcategory/autocarejobcategory.routes'),
  },
  {
    path: 'emp-sectiontbl',
    data: { pageTitle: 'EmpSectiontbls' },
    loadChildren: () => import('./emp-sectiontbl/emp-sectiontbl.routes'),
  },
  {
    path: 'emp-jobcommission',
    data: { pageTitle: 'EmpJobcommissions' },
    loadChildren: () => import('./emp-jobcommission/emp-jobcommission.routes'),
  },
  {
    path: 'autocarecancelitemopt',
    data: { pageTitle: 'Autocarecancelitemopts' },
    loadChildren: () => import('./autocarecancelitemopt/autocarecancelitemopt.routes'),
  },
  {
    path: 'paymentterm',
    data: { pageTitle: 'Paymentterms' },
    loadChildren: () => import('./paymentterm/paymentterm.routes'),
  },
  {
    path: 'salesinvoice',
    data: { pageTitle: 'Salesinvoices' },
    loadChildren: () => import('./salesinvoice/salesinvoice.routes'),
  },
  {
    path: 'salesorder',
    data: { pageTitle: 'Salesorders' },
    loadChildren: () => import('./salesorder/salesorder.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
