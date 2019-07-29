import IGCExtentProvider from "../../common/IGCExtentProvider";
import IBlobMetadataStore from "./IBlobMetadataStore";

export default class LokiBlobMetadataStore
  implements IBlobMetadataStore, IGCExtentProvider {
  iteratorAllExtents(): AsyncIterator<string[]> {
    throw new Error("Method not implemented.");
  }
  setServiceProperties(
    serviceProperties: import("./IBlobMetadataStore").ServicePropertiesModel
  ): Promise<import("./IBlobMetadataStore").ServicePropertiesModel> {
    throw new Error("Method not implemented.");
  }
  getServiceProperties(
    account: string
  ): Promise<
    import("./IBlobMetadataStore").ServicePropertiesModel | undefined
  > {
    throw new Error("Method not implemented.");
  }
  listContainers(
    account: string,
    prefix?: string | undefined,
    maxResults?: number | undefined,
    marker?: number | undefined
  ): Promise<
    [import("./IBlobMetadataStore").ContainerModel[], number | undefined]
  > {
    throw new Error("Method not implemented.");
  }
  createContainer(
    container: import("./IBlobMetadataStore").ContainerModel
  ): Promise<import("./IBlobMetadataStore").ContainerModel> {
    throw new Error("Method not implemented.");
  }
  getContainerProperties(
    account: string,
    container: string
  ): Promise<import("./IBlobMetadataStore").ContainerModel | undefined> {
    throw new Error("Method not implemented.");
  }
  deleteContainer(account: string, container: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  setContainerMetadata(
    container: import("./IBlobMetadataStore").ContainerModel
  ): Promise<import("./IBlobMetadataStore").ContainerModel> {
    throw new Error("Method not implemented.");
  }
  listBlobs(
    account?: string | undefined,
    container?: string | undefined,
    blob?: string | undefined,
    prefix?: string | undefined,
    maxResults?: number | undefined,
    marker?: number | undefined,
    includeSnapshots?: boolean | undefined
  ): Promise<[import("./IBlobMetadataStore").BlobModel[], number | undefined]> {
    throw new Error("Method not implemented.");
  }
  createBlob(blob: import("./IBlobMetadataStore").BlobModel): Promise<void> {
    throw new Error("Method not implemented.");
  }
  downloadBlob(
    account: string,
    container: string,
    blob: string,
    snapshot?: string | undefined
  ): Promise<import("./IBlobMetadataStore").BlobModel | undefined> {
    throw new Error("Method not implemented.");
  }
  getBlobProperties(
    account: string,
    container: string,
    blob: string,
    snapshot?: string | undefined
  ): Promise<import("./IBlobMetadataStore").BlobModel | undefined> {
    throw new Error("Method not implemented.");
  }
  deleteBlob(
    account: string,
    container: string,
    blob: string,
    snapshot?: string | undefined
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  setBlobHTTPHeaders(
    blob: import("./IBlobMetadataStore").BlobModel
  ): Promise<import("./IBlobMetadataStore").BlobModel> {
    throw new Error("Method not implemented.");
  }
  setBlobMetadata(
    blob: import("./IBlobMetadataStore").BlobModel
  ): Promise<import("./IBlobMetadataStore").BlobModel> {
    throw new Error("Method not implemented.");
  }
  stageBlock(
    block: import("./IBlobMetadataStore").BlockModel,
    blob?: import("./IBlobMetadataStore").BlobModel | undefined
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  commitBlockList(
    blob: import("./IBlobMetadataStore").BlobModel,
    blockList: { blockName: string; blockCommitType: string }[]
  ): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getBlockList(
    account: string,
    container: string,
    blob: string,
    isCommitted?: boolean | undefined
  ): Promise<{
    uncommittedBlocks: import("../generated/artifacts/models").Block[];
    committedBlocks: import("../generated/artifacts/models").Block[];
  }> {
    throw new Error("Method not implemented.");
  }
  init(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  isInitialized(): boolean {
    throw new Error("Method not implemented.");
  }
  close(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  isClosed(): boolean {
    throw new Error("Method not implemented.");
  }
}
