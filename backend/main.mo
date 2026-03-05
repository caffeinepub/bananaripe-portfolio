import List "mo:core/List";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Principal "mo:core/Principal";

actor {
  public type Theme = { #light; #dark };

  // User Profile Types
  public type Profile = {
    name : Text;
    role : Text;
    bio : Text;
    photoUrl : Text;
    theme : Theme;
  };

  // Project Types
  public type Project = {
    id : Text;
    title : Text;
    description : Text;
    imageUrl : Text;
    techStack : [Text];
    projectUrl : Text;
    githubUrl : Text;
    featured : Bool;
  };

  // Experience/Service Types
  public type Experience = {
    id : Text;
    title : Text;
    company : Text;
    location : Text;
    duration : Text;
    description : Text;
    skills : [Text];
  };

  public type Service = {
    id : Text;
    title : Text;
    description : Text;
    icon : Text;
  };

  // Contact Types
  public type SocialLink = {
    platform : Text;
    url : Text;
    icon : Text;
  };

  public type ContactInfo = {
    email : Text;
    phone : Text;
    socialLinks : [SocialLink];
  };

  // Skill Types
  public type Skill = {
    name : Text;
    level : Text; // e.g. "beginner", "intermediate", "advanced"
    icon : Text;
  };

  public type ThemeSettings = {
    primary : Text;
    secondary : Text;
    background : Text;
    foreground : Text;
  };

  // Content Storage
  let profiles = Map.empty<Principal, Profile>();
  let projects = Map.empty<Text, Project>();
  let experiences = Map.empty<Text, Experience>();
  let services = Map.empty<Text, Service>();
  let skills = List.empty<Skill>();
  var contactInfo : ?ContactInfo = null;

  // Profile Management
  public shared ({ caller }) func addOrUpdateProfile(name : Text, role : Text, bio : Text, photoUrl : Text, theme : Theme) : async () {
    let profile : Profile = {
      name;
      role;
      bio;
      photoUrl;
      theme;
    };
    profiles.add(caller, profile);
  };

  public query ({ caller }) func getProfile(user : Principal) : async Profile {
    switch (profiles.get(user)) {
      case (null) { Runtime.trap("Profile does not exist") };
      case (?profile) { profile };
    };
  };

  // Project Management
  public shared ({ caller }) func addOrUpdateProject(
    id : Text,
    title : Text,
    description : Text,
    imageUrl : Text,
    techStack : [Text],
    projectUrl : Text,
    githubUrl : Text,
    featured : Bool,
  ) : async () {
    let project : Project = {
      id;
      title;
      description;
      imageUrl;
      techStack;
      projectUrl;
      githubUrl;
      featured;
    };
    projects.add(id, project);
  };

  public query ({ caller }) func getProject(id : Text) : async Project {
    switch (projects.get(id)) {
      case (null) { Runtime.trap("Project does not exist") };
      case (?project) { project };
    };
  };

  public query ({ caller }) func getAllProjects() : async [Project] {
    projects.values().toArray();
  };

  public query ({ caller }) func getFeaturedProjects() : async [Project] {
    projects.values().toArray().filter(func(project) { project.featured });
  };

  // Experience Management
  public shared ({ caller }) func addExperience(
    id : Text,
    title : Text,
    company : Text,
    location : Text,
    duration : Text,
    description : Text,
    skillsArray : [Text],
  ) : async () {
    let experience : Experience = {
      id;
      title;
      company;
      location;
      duration;
      description;
      skills = skillsArray;
    };
    experiences.add(id, experience);
  };

  public query ({ caller }) func getExperience(id : Text) : async Experience {
    switch (experiences.get(id)) {
      case (null) { Runtime.trap("Experience does not exist") };
      case (?experience) { experience };
    };
  };

  public query ({ caller }) func getAllExperiences() : async [Experience] {
    experiences.values().toArray();
  };

  // Service Management
  public shared ({ caller }) func addService(id : Text, title : Text, description : Text, icon : Text) : async () {
    let service : Service = {
      id;
      title;
      description;
      icon;
    };
    services.add(id, service);
  };

  public query ({ caller }) func getService(id : Text) : async Service {
    switch (services.get(id)) {
      case (null) { Runtime.trap("Service does not exist") };
      case (?service) { service };
    };
  };

  public query ({ caller }) func getAllServices() : async [Service] {
    services.values().toArray();
  };

  // Skills Management
  public shared ({ caller }) func addSkill(name : Text, level : Text, icon : Text) : async () {
    let skill : Skill = {
      name;
      level;
      icon;
    };
    skills.add(skill);
  };

  public query ({ caller }) func getSkills() : async [Skill] {
    skills.toArray();
  };

  // Contact Information Management
  public shared ({ caller }) func setContactInfo(email : Text, phone : Text, socialLinks : [SocialLink]) : async () {
    contactInfo := ?{
      email;
      phone;
      socialLinks;
    };
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    switch (contactInfo) {
      case (null) { Runtime.trap("Contact information not set") };
      case (?info) { info };
    };
  };
};
