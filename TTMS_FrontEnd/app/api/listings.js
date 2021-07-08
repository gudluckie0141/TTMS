import client from "./client";


const endpoint = "api/ticket-list";
const endpointtt = "api/feedbackpost/";
const problem = "api/problem/";
const category = "api/category";
const subcategory = "api/subcategory";
const clientine = "api/client";

const getListings = () => client.get(endpoint);
const getCategories = () => client.get(category);
const getSubcategories = () => client.get(subcategory);
const getClients = () => client.get(clientine);

const addListing = (listing, onUploadProgress) => {
    const data = new FormData();
        data.append("qualityofservice", listing.QoS.label);
        data.append("qualityoftechnician", listing.QoT.label);
        data.append("othercomments", listing.comments);
        data.append("courtousnessoftechnician", listing.courteousness.label);
        data.append("fullname", listing.email);
        data.append("technicianfullname", listing.emailT);
        data.append("experiencewithtechnician", listing.experience.label);
        data.append("feedbackid", listing.feedback);
        data.append("knowledge", listing.knowledge.label);
        data.append("location", listing.location);
        data.append("overallsatisfaction", listing.overall.label);
        data.append("recommend", listing.recommendation.label);
        data.append("replaceourcompany", listing.replace.label);
        data.append("resolved", listing.resolved.label);
        data.append("responsetime", listing.responseTime.label);
        data.append("ticketid", listing.ticket);
        data.append("timetaken", listing.time.label);

        return client.post(endpointtt, data, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
        
};

const addProblem = (listing, onUploadProgress) => {
  const data = new FormData();
      data.append("createdby", listing.createdBy);
      data.append("category", listing.category);
      data.append("sub_category", listing.subcategory);
      data.append("description", listing.description);
      return client.post(problem, data, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } });
      
};

export default {
    getListings,
    addListing,
    addProblem,
    getCategories,
    getSubcategories,
    getClients
}


/*{
    onUploadProgress: (progress) =>
    onUploadProgress(progress.loaded  / progress.total),
}*/