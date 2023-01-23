const resources = {
  ErrorMaxLength: `Het ingevulde veld mag maximaal {lengte} lang zijn`,
  ErrorMinLength: `Het ingevulde veld moet minimaal {lengte} bevatten`,
  Products: `Website`,
  UsedToolsWordpress: `HTML5, CSS3, Wordpress`,
  UsedToolsPlain: `HTML5, CSS3, Javascript`,
  Webdevelopment: `Webdevelopment`,
  InterfaceAnddevelopment: `UX, UI en webdevelopment`,
  Ontwerpen: `UX, UI en Ontwerp`,
};

export type GeneralTextResources = typeof resources;

export function getGeneralTextResources(
  id: keyof GeneralTextResources
): string {
  return resources[id];
}

export function createGetTextResources<T extends object>(
  resources: T
): (id: keyof T | keyof GeneralTextResources) => string {
  return function getTextResources(
    id: keyof T | keyof GeneralTextResources
  ): string {
    if ((id as string) in resources) {
      return (resources as any)[id];
    }

    return getGeneralTextResources(id as keyof GeneralTextResources);
  };
}
