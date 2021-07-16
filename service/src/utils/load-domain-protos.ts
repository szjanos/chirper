type Entity = {
  lookupType: (path: string) => void;
};

const loadDomainProtos = <T>(
  entity: Entity,
  domainPkg: string,
  messagesToLookup: Array<string>
): T =>
  messagesToLookup.reduce((protos, message) => {
    const proto = entity.lookupType(domainPkg + message);
    const key = `${message}Proto`;
    return { ...protos, [key]: proto };
  }, {}) as T;

export default loadDomainProtos;
