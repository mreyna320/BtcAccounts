import { Breadcrumb, BreadcrumbService } from './breadcrumb.service';

describe('[Breadcrumb service]', () => {
  it('Should emit breadcrumb when they are updated', (done) => {
    const service = new BreadcrumbService();
    const breadcrumb: Breadcrumb[] = [{ label: 'test', url: 'testuri' }];
    service.getCrumbs().subscribe((x) => {
      expect(x).toEqual(breadcrumb);
      done();
    });
    service.setCrumbs(breadcrumb);
  });
});
